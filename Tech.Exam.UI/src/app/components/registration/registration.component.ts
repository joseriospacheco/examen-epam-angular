import { Component } from '@angular/core';

import { ClientService } from '../../services/client.service';
import { Client } from '../../interfaces/client';
import { NgForm, FormsModule } from '@angular/forms';

const clientCollection: Client[] = [];

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  id: number = 0;
  name: string = "";
  firstName: string = "";
  lastName: string = "";
  phone: string = "";
  email: string = "";



  searchTerm: string = "";

  clients: Client[] = [];

  error: string = "";
  cargando: string = "";


  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients();
  }

  onSubmit(form: NgForm) {

    if (form.invalid) {

      form.control.markAllAsTouched();
      alert("Por favor, complete todos los campos requeridos correctamente.");
      return;
    }

    let client: Client;
    client = {
      id: "",
      name: this.name,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email
    }


    this.cargando = "Guardando cliente, por favor espere...";

    this.clientService.saveClient(client)
      .subscribe({
        next: (data: any) => {
          alert("Cliente guardado correctamente.");
          this.getClients();

          form.resetForm();

        }, error: (err) => this.error = "Error al guardar el cliente: " + err.message,
        complete: () => this.cargando = ""
      });
  }

  getClients() {

    this.cargando = "Cargando clientes, por favor espere...";

    this.clientService.getClients()
      .subscribe({

        next: (data: any) => {
          this.clients = data;
        }, error: (err) => this.error = "Error al cargar los clientes: " + err.message, complete: () => this.cargando = ""
      });
  }

  deleteClient(clientId: string) {

    if (confirm("¿Estás seguro de que quieres eliminar este cliente?")) {

      this.cargando = "Eliminando cliente, por favor espere...";

      this.clientService.deleteClient(clientId.toString())
        .subscribe({
          next: () => {
            alert("Cliente eliminado correctamente.");
            this.getClients();
          },
          error: (err) => console.log(err),
          complete: () => {
            this.cargando = "";

          }
        });
    }
  }

  filterClients() {


    const searchTerm = this.searchTerm.toLowerCase();

    if (searchTerm === "") {
      this.getClients();
      return;
    }

    this.clients = this.clients.filter(client =>
      client.name.toLowerCase().includes(searchTerm) ||
      client.firstName.toLowerCase().includes(searchTerm) ||
      client.lastName.toLowerCase().includes(searchTerm)
    );

    console.log("Filtered clients:", this.clients);

  }

}
