import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  cargando: boolean;
  constructor(public authService: AuthService, public store: Store<AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('ui')
      .subscribe(ui => this.cargando = ui.isLoading);
  }
  onSubmit(data: any) {
    console.log(data);
    this.authService.crearUsuario(data.nombre, data.email, data.password);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
