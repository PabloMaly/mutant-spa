import { Component, OnInit, Input } from '@angular/core';
import { MutantService } from '../services/mutant.service';

@Component({
  selector: 'app-mutants',
  templateUrl: './mutants.component.html',
  styleUrls: ['./mutants.component.scss']
})
export class MutantsComponent implements OnInit {

@Input() statusDNA: string;
errormsg = false;

constructor( protected txService: MutantService ) { }

    ngOnInit() {
    }

    isMutant(dataform): void {
        this.txService.getUsers(dataform)
        .subscribe(
          data => { // Success
            this.errormsg = false;
            this.statusDNA = data;
          },
          (error) => { // error
            this.errormsg = true;
            this.statusDNA = error.message;
          }
        );
    }
}
