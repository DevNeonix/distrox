import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { environment } from '../environments/environment';
import { JsonPipe } from '@angular/common';

@Component({
    standalone: true,
    imports: [NxWelcomeComponent, RouterModule, JsonPipe],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    public title = 'frontend';

    public http = inject(HttpClient);

    public statusDb = toSignal(this.http.get(environment.apiUrl + 'status-db'));
}
