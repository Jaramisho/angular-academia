
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { EventColor } from 'calendar-utils';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  isMonday,
} from 'date-fns';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';


const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any> | undefined;



  modalData: {
    action: string;
    event: CalendarEvent;
  } | undefined;
  title = 'angular-academia';
  //Var for semestres
  public sabanaFlag = false;
  public selectedSemestre = "";
  public semestres = [{value:1,viewValue:"Semestre 1"},{value:2,viewValue:"Semestre 2"},{value:3,viewValue:"Semestre 3"},{value:4,viewValue:"Semestre 4"}]
  //Materias
  public selectedMateria = "";
  public materias1 = [{value:1,viewValue:"Matematica 1"},{value:2,viewValue:"Lógica Computacional"},{value:3,viewValue:"Fundamentos de la Informática"},{value:4,viewValue:"Contabilidad"},{value:5,viewValue:"Química General"},{value:6,viewValue:"Técnicas de Estudio e Investigación"},{value:7,viewValue:"Comprensión y Expresión Lingüística"}]
  public materias2 = [{value:1,viewValue:"Matematica 2"},{value:2,viewValue:"Program 1"},{value:3,viewValue:"Dibujo Tecnico"}]
  public materias:any = [];
  public secciones = [{value:1,viewValue:"Sección 1"},{value:1,viewValue:"Sección 2"},{value:1,viewValue:"Sección 3"}]
  public selectedSeccion = "";
  public selectedProfesores = "";
  public profesores:any = [{
    "viewValue": "Waylin Chittock",
    "value": 1
  }, {
    "viewValue": "Leo Mulloch",
    "value": 2
  }, {
    "viewValue": "Maiga Medforth",
    "value": 3
  }, {
    "viewValue": "Hildagarde Scad",
    "value": 4
  }, {
    "viewValue": "Nicky Franzman",
    "value": 5
  }, {
    "viewValue": "Kati Ralston",
    "value": 6
  }, {
    "viewValue": "Teodoor Shillingford",
    "value": 7
  }, {
    "viewValue": "Natividad Gauler",
    "value": 8
  }, {
    "viewValue": "Clementius Moller",
    "value": 9
  }, {
    "viewValue": "Silvia Harbour",
    "value": 10
  }, {
    "viewValue": "Frayda Bartolini",
    "value": 11
  }, {
    "viewValue": "Huberto Dykes",
    "value": 12
  }, {
    "viewValue": "Everard Mossom",
    "value": 13
  }, {
    "viewValue": "Mitchel Tatham",
    "value": 14
  }];
  public numMaterias = 0;
  public filterProfesores:any = [];

  //CALENDAR
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];
  public viewDate: Date = new Date();
  public events: any[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: { ...colors['red'] },
      //actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: false,
    },
    {
      start: addHours(startOfDay(new Date()), 8),
      end: addHours(startOfDay(new Date()), 10),
      title: 'LOGICA',
      color: { ...colors['yellow'] },
      actions: this.actions,
    },
  ];

  constructor() {}

  cambioSemestre(event:any){
    if(event.value==1){
      this.materias = this.materias1;
    }if(event.value==2){
      this.materias = this.materias2;
    }
    this.selectedMateria = "";
    console.log('Updated documents =>', event);
  }
  cambioMaterias(event:any){
    this.numMaterias = event.value.length;
    console.log('Updated documents =>', event);
  }
  cambioSeccion(event:any){
    this.filterProfesores = this.profesores.sort((a:any, b:any) => 0.5 - Math.random()).slice(1,this.numMaterias+2);
    console.log('Updated documents =>', event);
  }
  onclickgen(event: any){
    this.sabanaFlag =true;
  }
  handleEvent(action: string, event: CalendarEvent): void {
    /* this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' }); */
    console.log(this.modalContent)
  }
}
