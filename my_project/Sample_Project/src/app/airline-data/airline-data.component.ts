import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'airline-data',
  templateUrl: './airline-data.component.html',
  styleUrls: ['./airline-data.component.scss']
})
export class AirlineDataComponent implements OnInit {

  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
  }
  openFirstModel(): void {
    this.communicationService.setOpenFirstModel(true);
  }

  openSecondModel(): void {
    this.communicationService.setOpenSecondModel(true);
  }

  openThirdModel(): void {
    this.communicationService.setOpenThirdModel(true);
  }
}
