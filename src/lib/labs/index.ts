import type { CollectionEntry } from 'astro:content';
import { getLabSource, labExerciseHref, labModuleHref } from '../../data/labs.ts';
import { labEntryId } from './paths.ts';

export type LabEntry = CollectionEntry<'labs'>;

export function labsForProgramme(labs: LabEntry[], programme: string) {
  return labs
    .filter((lab) => lab.data.programme === programme)
    .sort((a, b) => a.data.order - b.data.order);
}

export function modulesForProgramme(labs: LabEntry[], programme: string) {
  return labsForProgramme(labs, programme).filter((lab) => lab.data.kind === 'module');
}

export function exercisesForModule(labs: LabEntry[], programme: string, moduleSlug: string) {
  return labsForProgramme(labs, programme).filter(
    (lab) => lab.data.kind === 'exercise' && lab.data.moduleSlug === moduleSlug,
  );
}

export function findLabModule(labs: LabEntry[], programme: string, moduleId: string) {
  return modulesForProgramme(labs, programme).find((lab) => lab.data.moduleId === moduleId);
}

export function groupedLabs(labs: LabEntry[], programme: string) {
  const modules = modulesForProgramme(labs, programme);
  return modules.map((module) => ({
    module,
    exercises: exercisesForModule(labs, programme, module.data.moduleSlug),
  }));
}

export function labHref(lab: LabEntry) {
  if (lab.data.kind === 'exercise' && lab.data.exerciseSlug) {
    return labExerciseHref(lab.data.programme, lab.data.moduleSlug, lab.data.exerciseSlug);
  }
  return labModuleHref(lab.data.programme, lab.data.moduleSlug);
}

export function labNeighbors(labs: LabEntry[], current: LabEntry) {
  const scoped = current.data.kind === 'exercise'
    ? exercisesForModule(labs, current.data.programme, current.data.moduleSlug)
    : modulesForProgramme(labs, current.data.programme);
  const index = scoped.findIndex((lab) => lab.id === current.id);
  return {
    previous: index > 0 ? scoped[index - 1] : undefined,
    next: index >= 0 && index < scoped.length - 1 ? scoped[index + 1] : undefined,
  };
}

export function labByRestSlug(labs: LabEntry[], programme: string, rest: string) {
  const [moduleSlug, exerciseSlug] = rest.split('/');
  if (!moduleSlug) return undefined;
  const id = labEntryId(programme, moduleSlug, exerciseSlug);
  return labs.find((lab) => lab.id === id);
}

export { getLabSource, labEntryId };
