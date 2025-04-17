'use server'

import { Sample } from '@/core/domain/entities/sample.entity';
import { addSampleUseCase } from '@/core/useCases/sample.useCases'

export async function AddSampleAction(sample: Sample) {
  await addSampleUseCase(sample);
}