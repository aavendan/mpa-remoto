import { Component } from '@angular/core';

import { HttpClientModule } from  '@angular/common/http';
import { HappinessService } from '../../providers/happiness.service';
import { Data } from '../../interfaces/data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HttpClientModule],
  providers: [HappinessService],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  public data : Data[] = [];

  constructor(private dataProvider: HappinessService) {}

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      let dataArray = (response as Data[]); 
      this.data = dataArray.slice(0,10)
    })
  }

}
