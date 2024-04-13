import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'shc-data',
  templateUrl: './shc-data.component.html',
  styleUrls: ['./shc-data.component.scss']
})
export class ShcDataComponent implements OnInit {
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
    this.communicationService.openThirdModel$.subscribe(open => {
      this.isOpen = open;
    });
  }

  fetchData() {
    this.communicationService.getData().subscribe((res: any) => {
      this.data = res;
      this.sortData();
    });
  }

  apply() {
    this.search();
  }

  sortData() {
    // Sort data numerically by id
    this.filteredData = [...this.data]; // Copy data to avoid mutating original array
    this.filteredData.sort((a, b) => a.id - b.id);
  }

  search() {
    const searchTermNumber = parseInt(this.searchTerm);
    if (!isNaN(searchTermNumber)) {
      this.filteredData = this.data.filter(item => item.id === searchTermNumber);
    } else {
      this.filteredData = this.data.filter(item => item.name.toLowerCase().startsWith(this.searchTerm.toLowerCase()));
    }
  }
  onSearch() {
    if (this.searchTerm === '') {
      this.fetchData();
    }
  }
  closeModal() {
    this.isOpen = false;
    this.searchTerm = '';
    this.fetchData();
  }

  cancel() {
    this.searchTerm = '';
    this.fetchData();
  }
}