import { Sample } from '../entities/sample.entity';

export interface ISampleRepository {
  add(sample: Sample): Promise<void>;
}