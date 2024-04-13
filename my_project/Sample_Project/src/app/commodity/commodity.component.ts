import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.scss']
})
export class CommodityComponent implements OnInit {
  isOpen: boolean = false;
  data: any[] = [];
  searchTerm: string = '';
  filteredData: any[] = [];

  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.subscribeToOpenModel();
    this.fetchData();
  }

  subscribeToOpenModel() {
    this.communicationService.openSecondModel$.subscribe(open => {
      this.isOpen = open;
    });
  }

  fetchData() {
    this.communicationService.getData().subscribe((res: any) => {
      this.data = res;
      this.sortData();
    });
  }

  search() {
    const term = this.searchTerm.toLowerCase();
    this.filteredData = this.data.filter(item =>
      item.username.toLowerCase().startsWith(term) ||
      item.email.toLowerCase().startsWith(term)
    );

  }

  apply() {
    this.search();
  }

  sortData() {
    this.filteredData = [...this.data]; // Copy data to avoid mutating original array
    this.filteredData.sort((a, b) => a.username.localeCompare(b.username));
  }

  closeModal() {
    this.isOpen = false;
    this.searchTerm = '';
    this.fetchData();
  }
  onSearch() {
    if (this.searchTerm === '') {
      this.fetchData();
    }
  }
  cancel() {
    this.searchTerm = '';
    this.fetchData();
  }
}