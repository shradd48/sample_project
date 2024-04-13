import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
  isOpen: boolean = false;
  data: string[] = []; // API data
  searchTerm: string = '';
  filteredData: any[] = [];
  selectedRows: any[] = [];

  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.communicationService.openFirstModel$.subscribe(open => {
      this.isOpen = open
    })
    this.fetchData();
  }

  toggleRow(item: any) {
    if (this.isSelected(item)) {
      this.selectedRows = this.selectedRows.filter(row => row !== item);
    } else {
      this.selectedRows.push(item);
    }
  }

  isSelected(item: boolean) {
    return this.selectedRows.includes(item);
  }

  fetchData() {
    this.communicationService.getData().subscribe((res: string[]) => {
      this.data = res;
      this.filteredData = this.data; // Initially, display all data
    });
  }

  closeModal() {
    this.isOpen = false;
  }
}
