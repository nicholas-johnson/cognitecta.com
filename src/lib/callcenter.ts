export const DEFAULT_CALLCENTER_INGEST_URL =
  'https://callcenter.linearhorizon.com/api/v1/conversations';

export type EnquiryInput = {
  name: string;
  email: string;
  organisation: string;
  interest: string;
  interestLabel: string;
  course?: string;
  context: string;
};

export type CallcenterEnquiry = {
  channel: 'web';
  source: 'linearhorizon.com/contact';
  customer: {
    name: string;
    email: string;
    organisation: string;
  };
  message: {
    subject: string;
    body: string;
  };
  metadata: {
    interest: string;
    course?: string;
  };
};

export class CallcenterSubmitError extends Error {
  readonly status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = 'CallcenterSubmitError';
    this.status = status;
  }
}

export function enquirySubject(enquiry: EnquiryInput) {
  return `Linear Horizon enquiry — ${enquiry.organisation} — ${enquiry.course?.trim() || enquiry.interestLabel}`;
}

export function buildCallcenterEnquiry(enquiry: EnquiryInput): CallcenterEnquiry {
  const course = enquiry.course?.trim();
  return {
    channel: 'web',
    source: 'linearhorizon.com/contact',
    customer: {
      name: enquiry.name.trim(),
      email: enquiry.email.trim(),
      organisation: enquiry.organisation.trim(),
    },
    message: {
      subject: enquirySubject(enquiry),
      body: enquiry.context.trim(),
    },
    metadata: {
      interest: enquiry.interest,
      ...(course ? { course } : {}),
    },
  };
}

export async function submitCallcenterEnquiry(
  url: string,
  enquiry: EnquiryInput,
  options: { publishableKey?: string; fetch?: typeof fetch } = {},
) {
  const headers: Record<string, string> = {
    accept: 'application/json',
    'content-type': 'application/json',
  };
  const key = options.publishableKey?.trim();
  if (key) headers.authorization = `Bearer ${key}`;

  const fetchImpl = options.fetch ?? fetch;
  const response = await fetchImpl(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(buildCallcenterEnquiry(enquiry)),
  });

  if (!response.ok) {
    throw new CallcenterSubmitError(
      response.status,
      `Callcenter rejected the enquiry (${response.status}).`,
    );
  }
}
