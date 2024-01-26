import { Component } from '@angular/core';
import { SidebarItem } from '../../interfaces/sidebar-item.interface';

@Component({
  selector: 'heroes-layout-root',
  templateUrl: './layout-root.component.html',
  styles: ``,
})
export class LayoutRootComponent {
  sidebarItems: SidebarItem[] = [
    {
      label: 'Listado',
      icon: 'list',
      url: 'list',
    },
    {
      label: 'Añadir',
      icon: 'add',
      url: 'new-hero',
    },
    {
      label: 'Buscar',
      icon: 'search',
      url: 'search',
    },
  ];
}
