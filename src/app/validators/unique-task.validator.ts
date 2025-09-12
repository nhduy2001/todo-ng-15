import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export function uniqueTaskValidator(http: HttpClient): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const value = control.value?.trim().toLowerCase();
    if (!value) return of(null);

    return http.get<any[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      map((todos) => {
        const exists = todos.some((t) => t.title.toLowerCase() === value);
        return exists ? { taskExists: true } : null;
      }),
      catchError(() => of(null))
    );
  };
}
