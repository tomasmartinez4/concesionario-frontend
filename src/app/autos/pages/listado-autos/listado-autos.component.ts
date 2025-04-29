import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';  

import { Auto } from '../../models/auto.model';
import { AutoService } from '../../services/auto.service';

@Component({
  selector: 'app-listado-autos',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ToolbarModule,
    ToastModule,
    CardModule,
    DialogModule,
    ReactiveFormsModule
  ],
  providers: [ MessageService ],
  templateUrl: './listado-autos.component.html',
  styleUrls: ['./listado-autos.component.scss']
})
export class ListadoAutosComponent implements OnInit {
  autos: Auto[] = [];
  isEdit = false;
  dialogVisible = false;
  currentYear = new Date().getFullYear();
  form!: FormGroup;

  constructor(
    private autoService: AutoService,
    private messageService: MessageService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.load();
    this.form = this.fb.group({
      id:    [0],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: [new Date().getFullYear(), [Validators.required, Validators.min(1900)]],
      precio: [0, [Validators.required, Validators.min(0)]],
    });
  }

  private load(): void {
    this.autoService.getAll().subscribe({
      next: data => this.autos = data,
      error: () =>
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar los autos' })
    });
  }

  onCreate(): void {
    this.form.reset({ anio: new Date().getFullYear(), precio: 0, id: 0 });
    this.isEdit = false;
    this.dialogVisible = true;
  }

  onEdit(a: Auto): void {
    this.form.setValue(a);
    this.isEdit = true;
    this.dialogVisible = true;
  }

  save(): void {
    if (this.form.invalid) return;
    const auto: Auto = this.form.value;

    if (this.isEdit) {
      this.autoService.update(auto.id, auto).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Auto actualizado' });
          this.dialogVisible = false;
          this.load();
        },
        error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo actualizar el auto' })
      });
    } else {
      console.log(auto);
      this.autoService.create(auto).subscribe({
        next: created => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: `Auto creado (ID ${created.id})`
          });
          this.dialogVisible = false;
          this.load();
        },
        error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo crear el auto' })
      });
    }
  }

  onDelete(a: Auto): void {
    if (confirm(`¿Eliminar ${a.marca} ${a.modelo}?`)) {
      this.autoService.delete(a.id).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Auto eliminado' });
          this.load();
        },
        error: () =>
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo eliminar el auto' })
      });
    }
  }
}