import React from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminSidebarButton from '../components/AdminSidebarButton';
import AdminSidebar from '../components/AdminSidebar';
import AdminForms from '../components/AdminForms';
import AdminFooter from '../components/AdminFooter';
import './styles/AdminAddFlights.sass';

const AdminAddFlights = () => {
  return (
    <>
      <AdminHeader headerTitle="Creación de Vuelos" />

      <div className="MainView">
        <AdminSidebar>
          <AdminSidebarButton action="Crear Vuelos" />
          <AdminSidebarButton action="Editar Vuelos" />
        </AdminSidebar>

        <AdminForms />
      </div>

      <AdminFooter />
    </>
  );
};

export default AdminAddFlights;
