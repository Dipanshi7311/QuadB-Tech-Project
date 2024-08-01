import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Column2 from './pages/Column2';
import Column3 from './pages/Column3';
import Frame20 from './pages/Frame20';
import Frame21 from './pages/Frame21';
import Property1Default from './pages/Property1Default';
import Property1Default1 from './pages/Property1Default1';
import RimoonClearLine from './pages/RimoonClearLine';
import ToDoEditlistDark from './pages/ToDoEditlistDark';
import ToDoEditlistLight from './pages/ToDoEditlistLight';
import ToDoNavEditlistDark from './pages/ToDoNavEditlistDark';
import ToDoNavEditlistLight from './pages/ToDoNavEditlistLight';
import ToDoNavblockDark from './pages/ToDoNavblockDark';
import ToDoNavblockLight from './pages/ToDoNavblockLight';
import ToDoNavlistDark from './pages/ToDoNavlistDark';
import ToDoNavlistLight from './pages/ToDoNavlistLight';
import ToDoblockDark from './pages/ToDoblockDark';
import ToDoblockLight from './pages/ToDoblockLight';
import ToDolistDark from './pages/ToDolistDark';
import ToDolistLight from './pages/ToDolistLight';


const router = createBrowserRouter([
  { path: '/', element: <ToDoNavlistLight /> },
{ path: '/Column2', element: <Column2 /> },
{ path: '/Column3', element: <Column3 /> },
{ path: '/Frame20', element: <Frame20 /> },
{ path: '/Frame21', element: <Frame21 /> },
{ path: '/Property1Default', element: <Property1Default /> },
{ path: '/Property1Default1', element: <Property1Default1 /> },
{ path: '/RimoonClearLine', element: <RimoonClearLine /> },
{ path: '/ToDoEditlistDark', element: <ToDoEditlistDark /> },
{ path: '/ToDoEditlistLight', element: <ToDoEditlistLight /> },
{ path: '/ToDoNavEditlistDark', element: <ToDoNavEditlistDark /> },
{ path: '/ToDoNavEditlistLight', element: <ToDoNavEditlistLight /> },
{ path: '/ToDoNavblockDark', element: <ToDoNavblockDark /> },
{ path: '/ToDoNavblockLight', element: <ToDoNavblockLight /> },
{ path: '/ToDoNavlistDark', element: <ToDoNavlistDark /> },
{ path: '/ToDoNavlistLight', element: <ToDoNavlistLight /> },
{ path: '/ToDoblockDark', element: <ToDoblockDark /> },
{ path: '/ToDoblockLight', element: <ToDoblockLight /> },
{ path: '/ToDolistDark', element: <ToDolistDark /> },
{ path: '/ToDolistLight', element: <ToDolistLight /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}