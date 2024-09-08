import { validate, ValidationError } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export function validateDto(DtoClass: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoInstance = new DtoClass();
    Object.assign(dtoInstance, req.body);

    const errors: ValidationError[] = await validate(dtoInstance);

    if (errors.length > 0) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: errors.map((err) => err.constraints),
      });
    }

    next();
  };
}
