import React from 'react';
import { MessageSquarePlus, Image, LayoutGrid, Folder } from 'lucide-react';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <MessageSquarePlus size={20} />
        <span>New Chat</span>
      </div>
      <div className="sidebar-item">
        <Image size={20} />
        <span>Image</span>
      </div>
      <div className="sidebar-item">
        <LayoutGrid size={20} />
        <span>Apps</span>
      </div>
      <div className="sidebar-item">
        <Folder size={20} />
        <span>Project</span>
      </div>
    </div>
  );
};