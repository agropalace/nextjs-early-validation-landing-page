import { ISampleRepository } from './domain/ports/ISampleRepository';
import { SampleRepository } from './repositories/sample.repository';

const sampleRepository: ISampleRepository = new SampleRepository();

export { sampleRepository };

