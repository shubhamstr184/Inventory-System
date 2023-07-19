import { Component } from '@angular/core';
import { NgbOffcanvasConfig, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbOffcanvasConfig, NgbOffcanvas],
})
export class HeaderComponent {
  constructor(config: NgbOffcanvasConfig, private offcanvasService: NgbOffcanvas) {
		config.position = 'end';
		config.backdropClass = 'bg-primary';
		config.keyboard = false;
    config.scroll = true;
    config.animation = true;
	}
  open(content: any) {
		this.offcanvasService.open(content,{ panelClass: 'bg-info' });
	}

}
