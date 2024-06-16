import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = environment.API_KEY;
  const modifiedReq = req.clone({
    setParams: {
      api_key: token,
      language: 'es',
    },
  });
  return next(modifiedReq);
};
