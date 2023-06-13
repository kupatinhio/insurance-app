import { Test, TestingModule } from '@nestjs/testing';
import { PacketsController } from './packets.controller';
import { PacketsService } from './packets.service';

describe('PacketsController', () => {
  let controller: PacketsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PacketsController],
      providers: [PacketsService],
    }).compile();

    controller = module.get<PacketsController>(PacketsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
