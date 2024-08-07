"use client";
import React, { useState, useEffect } from 'react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Button } from "@/components/ui/button";

export default function ResizableDemo({ initialSize = 20 }) {
  const [size, setSize] = useState(initialSize);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setSize(initialSize);
  }, [initialSize]);

  const handleResize = (newSize) => {
    setSize(newSize);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="h-screen w-screen">
      <Button onClick={toggleVisibility} className="mb-4">
        {isVisible ? 'Hide Panel' : 'Show Panel'}
      </Button>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full rounded-lg border"
      >
        <ResizablePanel 
          defaultSize={size} 
          onResize={handleResize}
          className="h-full bg-yellow-300 transition-all duration-300 ease-in-out overflow-hidden"
          style={{
            maxWidth: isVisible ? '100%' : '0%',
            minWidth: isVisible ? '10%' : '0%',
            width: isVisible ? '100%' : '0%',
            transition: 'all 0.5s ease-in-out',
          }}
        >
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Size: {Math.round(size)}%</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Two</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}