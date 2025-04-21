import { Sample } from '../domain/entities/sample.entity';
import { sampleRepository }  from '@/core/adapters';

async function addSampleUseCase (sample: Sample) {
  await sampleRepository.add(sample);
};

export { addSampleUseCase }