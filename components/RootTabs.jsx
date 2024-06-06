"use client"
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Document from './Document';
import Sign from './Sign';
import Batch from './Batch';
import Advanced from './Advanced';
import Export from './Export';
import Image from 'next/image';
import { motion } from "framer-motion";


const tabData = [
  { value: 'document', label: 'Document Scanner', component: <Document />, tabLinkColorUrl: '/assets/document-color.png', tabLinkBlackUrl: '/assets/document-black.png' },
  { value: 'sign', label: 'Sign & Stamp', component: <Sign />, tabLinkColorUrl: '/assets/sign-color.png', tabLinkBlackUrl: '/assets/sign-black.png' },
  { value: 'batch', label: 'Batch Scanning', component: <Batch />, tabLinkColorUrl: '/assets/batch-color.png', tabLinkBlackUrl: '/assets/batch-black.png' },
  { value: 'advanced', label: 'Advanced Filters', component: <Advanced />, tabLinkColorUrl: '/assets/advanced-color.png', tabLinkBlackUrl: '/assets/advanced-black.png' },
  { value: 'export', label: 'Export & Share', component: <Export />, tabLinkColorUrl: '/assets/export-color.png', tabLinkBlackUrl: '/assets/export-black.png' },
];

const RootTabs = () => {

  const scale = 0.1575;
  const scaledPath = `M ${130 * scale} ${6 * scale} C ${198.483 * scale} ${6 * scale} ${254 * scale} ${61.517 * scale} ${254 * scale} ${130 * scale} C ${254 * scale} ${198.483 * scale} ${198.483 * scale} ${254 * scale} ${130 * scale} ${254 * scale} C ${61.517 * scale} ${254 * scale} ${6 * scale} ${198.483 * scale} ${6 * scale} ${130 * scale} C ${6 * scale} ${61.517 * scale} ${61.517 * scale} ${6 * scale} ${130 * scale} ${6 * scale} Z`;

  const [activeTab, setActiveTab] = useState('document');

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <Tabs defaultValue="document" className='custom-tabs'>
      {tabData.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-0">
          {tab.component}
        </TabsContent>
      ))}
      <TabsList>
        {tabData.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            onClick={() => handleTabClick(tab.value)}
            className='flex gap-3 items-center relative bg-gray-100'
          >
            {activeTab === tab.value ?

              <motion.div initial="start" animate={"end"} className='flex' >
                <motion.svg xmlns="http://www.w3.org/2000/svg" width="41" height="41">
                  <motion.path
                    d={scaledPath}
                    fill="transparent"
                    strokeWidth="2"
                    stroke={"#FFCC66"}
                    variants={{
                      start: { pathLength: 0, stroke: "#FFCC66" },
                      end: { pathLength: 1, stroke: "#66BB66" }
                    }}
                    transition={{ duration: 1 }}
                  />
                </motion.svg>
                <Image src={tab.tabLinkColorUrl} width={40} height={40} alt={tab.value} className='absolute p-1' />
              </motion.div>
              :
              <div className='bg-gray-300 min-w-10 rounded-full p-0.5'>
                <div className=' bg-white rounded-full'>
                  <Image src={tab.tabLinkBlackUrl} width={40} height={40} alt={tab.value} className='p-1' />
                </div>
              </div>
            }
            <div>
              {tab.label}
            </div>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default RootTabs;
