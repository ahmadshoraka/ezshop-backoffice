import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/authentication/services/auth.service';
import {ComponentService} from '../components/component.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class pageHeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() userName: string = '';
  @Output() backButton = new EventEmitter();

  constructor(private authService: AuthService,
              private componentService: ComponentService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  returnBack(){
    this.backButton.emit();
  }

}
