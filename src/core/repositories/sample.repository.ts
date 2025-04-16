import { Sample } from '../domain/entities/sample.entity';
import { ISampleRepository } from '../domain/ports/ISampleRepository';

export class SampleRepository implements ISampleRepository {
  async add(sample: Sample): Promise<void> {
    console.log('Sample added:', sample);
  }
}