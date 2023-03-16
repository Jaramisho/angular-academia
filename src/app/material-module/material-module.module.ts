import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatCardModule,
        MatSelectModule,
        MatStepperModule,
        MatExpansionModule,
        MatTooltipModule,
        MatBadgeModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatGridListModule,
        MatChipsModule,
        MatDialogModule,
        MatRippleModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatTabsModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        DragDropModule,
        MatProgressBarModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatListModule,
        MatCardModule,
        MatSelectModule,
        MatStepperModule,
        MatExpansionModule,
        MatTooltipModule,
        MatBadgeModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatGridListModule,
        MatChipsModule,
        MatDialogModule,
        MatRippleModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatTabsModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        DragDropModule,
        MatProgressBarModule,
        MatAutocompleteModule,
        MatNativeDateModule
    ],
    providers: [
        MatDatepickerModule,
    ]
})
export class MaterialModuleModule { }
