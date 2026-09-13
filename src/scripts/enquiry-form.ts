import {
  DEFAULT_CALLCENTER_INGEST_URL,
  submitCallcenterEnquiry,
} from '../lib/callcenter';

type EnquiryConfig = {
  interestLabels: Record<string, string>;
  interestAliases: Record<string, string>;
  courseLabels: Record<string, string>;
  replyEmail: string;
};

function readConfig(): EnquiryConfig {
  const node = document.getElementById('enquiry-config');
  if (!(node instanceof HTMLScriptElement) || !node.textContent) {
    throw new Error('Missing enquiry form configuration.');
  }
  return JSON.parse(node.textContent) as EnquiryConfig;
}

function fieldValue(form: HTMLFormElement, name: string) {
  return String(new FormData(form).get(name) ?? '').trim();
}

function setStatus(node: HTMLElement | null, message: string) {
  if (node) node.textContent = message;
}

export function mountEnquiryForm() {
  const form = document.getElementById('enquiry');
  if (!(form instanceof HTMLFormElement)) return;

  const config = readConfig();
  const ingestUrl =
    import.meta.env.PUBLIC_CALLCENTER_INGEST_URL?.trim() || DEFAULT_CALLCENTER_INGEST_URL;
  const publishableKey = import.meta.env.PUBLIC_CALLCENTER_PUBLISHABLE_KEY?.trim();
  const params = new URLSearchParams(window.location.search);
  const interestField = form.elements.namedItem('interest');
  const requestedProgramme = params.get('programme');
  const rawInterest = params.get('interest');
  const requestedInterest =
    rawInterest && rawInterest in config.interestAliases
      ? config.interestAliases[rawInterest]
      : rawInterest;
  const requestedCourse = params.get('course');
  const courseNote = document.getElementById('course-note');
  const courseField = document.getElementById('course-field');
  const status = document.getElementById('enquiry-status');
  const success = document.getElementById('enquiry-success');
  const fields = document.getElementById('enquiry-fields');
  const submit = form.querySelector('button[type="submit"]');
  const courseTitle =
    requestedCourse && requestedCourse in config.courseLabels
      ? config.courseLabels[requestedCourse]
      : '';

  if (interestField instanceof HTMLSelectElement) {
    if (requestedProgramme && requestedProgramme in config.interestLabels) {
      interestField.value = requestedProgramme;
    } else if (requestedInterest && requestedInterest in config.interestLabels) {
      interestField.value = requestedInterest;
    } else if (courseTitle) {
      interestField.value = 'train';
    }
  }

  if (courseTitle && courseNote instanceof HTMLElement && courseField instanceof HTMLInputElement) {
    courseNote.textContent = `Course: ${courseTitle}`;
    courseNote.classList.remove('hidden');
    courseField.value = courseTitle;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (fieldValue(form, 'website')) {
      if (success && fields && submit instanceof HTMLButtonElement) {
        fields.hidden = true;
        submit.hidden = true;
        success.hidden = false;
      }
      return;
    }

    const interestValue = fieldValue(form, 'interest');
    const enquiry = {
      name: fieldValue(form, 'name'),
      email: fieldValue(form, 'email'),
      organisation: fieldValue(form, 'organisation'),
      interest: interestValue,
      interestLabel: config.interestLabels[interestValue] ?? interestValue,
      course: fieldValue(form, 'course'),
      context: fieldValue(form, 'context'),
    };

    if (submit instanceof HTMLButtonElement) {
      submit.disabled = true;
      submit.textContent = 'Sending';
    }
    form.setAttribute('aria-busy', 'true');
    setStatus(status, '');

    try {
      await submitCallcenterEnquiry(ingestUrl, enquiry, { publishableKey });
      if (success && fields && submit instanceof HTMLButtonElement) {
        fields.hidden = true;
        submit.hidden = true;
        success.hidden = false;
      }
      setStatus(status, '');
    } catch {
      setStatus(
        status,
        `The enquiry could not be sent. Try again, or email ${config.replyEmail}.`,
      );
      if (submit instanceof HTMLButtonElement) {
        submit.disabled = false;
        submit.textContent = 'Talk to us';
      }
    } finally {
      form.removeAttribute('aria-busy');
    }
  });
}
