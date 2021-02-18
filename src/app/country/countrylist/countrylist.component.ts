import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../core/services/country.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {

  data:any;
dtOptions: any = {};

  constructor(private countryService:CountryService,private router: Router) { 

     this.countryService.getCountryListByTable().subscribe((data:any) => {
      this.data = data;  
    }) 

  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };

  /*  this.countryService.getCountryList().subscribe((x:any) => {

      
        x.forEach((data:any,index:number) => {
          
          this.countryService.storeCountryList(data).subscribe(
            data =>{

            },
            error =>{
              console.log(error);
            }
          );
        
        });
    }) 
*/





  }

}
