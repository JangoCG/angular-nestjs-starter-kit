import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UserDto} from "@shared/dto/user.dto";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
  bla: UserDto = {id: 1, email: 'asdasd', name: 'asdasd'};

}
