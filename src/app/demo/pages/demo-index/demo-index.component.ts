import { Component, OnInit } from '@angular/core';
import { IFilter } from '../../interfaces/filter.interface';
import { IPaginatedList } from '../../interfaces/paginated-list.interface';
import { Item } from '../../interfaces/item.interface';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-demo-index',
  templateUrl: './demo-index.component.html'
})
export class DemoIndexComponent implements OnInit {

  pageSize = 20;
  citiesSearchFilter = { page: 0, pageSize: this.pageSize, type: 'City' } as IFilter;
  cities: IPaginatedList<Item> = { items: [], total: 0 };

  countries: IPaginatedList<Item> = { items: [], total: 0 };
  selectedCountry: Item;

  constructor(private _http: HttpService) { }

  async ngOnInit() {
    await this.getCountries();
    await this.getCities();
  }

  async getCountries(search: string = null) {
    const filter = { type: 'Country', page: 0, pageSize: this.pageSize } as IFilter;
    if (search) filter.search = search;
    this.countries = await this._http.getItems(filter);
  }

  async onSearchCountry(search: string) {
    if (!search) return;
    await this.getCountries(search);
  }

  async onLoadMoreCountries() {
    const filter = { type: 'Country', page: this.countries.items.length, pageSize: this.pageSize, } as IFilter;
    const res = await this._http.getItems(filter) as IPaginatedList<Item>;
    this.countries.items.push(...res.items);
    this.countries.total = res.total;
  }

  async onCountryChange(item?: Item) {
    !item ? this.citiesSearchFilter.parentId = 0 : this.citiesSearchFilter.parentId = item.id;
    this.citiesSearchFilter.page = 0;
    await this.getCities();
  }

  async getCities() {
    return this.cities = await this._http.getItems(this.citiesSearchFilter, '/cities/extended');
  }

  async gridIndexChange(index?: number) {
    if (!index) return;
    this.citiesSearchFilter.page = (index - 1) * this.pageSize;
    await this.getCities();
  }

}
