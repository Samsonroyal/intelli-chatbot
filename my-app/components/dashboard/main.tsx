
import React from 'react';
import { useState } from "react";
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Import NextStepJS components and hooks
import { NextStepProvider, NextStep, useNextStep } from "nextstepjs";

// Import the custom card component
import ShadcnCustomCard from "@/components/CustomCard";

// Import the tour steps
import { steps } from "@/utils/tourSteps"; 

import { useUser } from "@clerk/nextjs";


interface User {
    photoURL: string | null;
    displayName: string | null;
    email: string | null;
    firstName: string | null; // Add the firstName property
    companyName: string | null; // Add the companyName property 
  }

const Dashboard: React.FC = () => {

      // Use the NextStepJS hook to control the tour
  const { startNextStep } = useNextStep();
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  // Handler for starting the tour
 // const handleStartTour = () => {
 //   startNextStep("mainTour");
 // };

  const onClickHandler = (tourName: string) => {
    setIsBannerVisible(false);
    startNextStep(tourName);
  };


    const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }


    return (
        <div className="space-y-8">
             {/* Start Tour Button */}
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="default"
                    className="mr-2 bg-[#007fff] rounded-xl pt-2 "                   
                    onClick={() => onClickHandler('mainTour')}
                  >
                    <Sparkles size={16} className="mr-2" /> Start Tour
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This gives you a product tour of Intelli</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

             <div className="min-h-200 bg-blue-100 rounded-b-2xl">
           

            {/* Top banner */}
            <div className='w-full'>
                <div className="bg-[#007fff] text-white py-12 px-10 pt-6 sm:pt-12 sm:bg-blue sm:rounded-t-2xl">
                    <h1 className="text-3xl font-bold">Welcome, <span style={{ color: 'yellow' }}> {user.firstName} </span></h1>
                    <p className="text-lg">Overview of Intelli</p>
                </div>
                <svg width="500" height="80" viewBox="0 0 500 100" preserveAspectRatio="none" className="w-full hidden sm:block"><path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" fill="#007fff"></path></svg>
            </div>

            {/* Dashboard grid */}
            <div className="max-w-6xl mx-auto mt-0 p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1: Create an Assistant */}
                    <div id="step3" className="bg-white shadow-md p-6 rounded-lg flex flex-col justify-between hover:shadow-lg transition-shadow">
                        <div>
                            <div className="text-2xl mb-4">🛠️</div>
                            <h2 className="text-xl font-semibold">Create an Assistant</h2>
                            <p className="text-gray-600 mt-1">Choose a channel and start building</p>
                        </div>
                        <div className="text-right mt-4">
                            <a href="/dashboard/assistants" className="text-black hover:text-blue-600">↗</a>
                        </div>
                    </div>

                    {/* Card 2: Invite a team member */}
                    <div id="step2" className="bg-white shadow-md p-6 rounded-lg flex flex-col justify-between hover:shadow-lg transition-shadow">
                        <div>
                            <div className="text-2xl mb-4">🏢</div>
                            <h2 className="text-xl font-semibold">Create a team/organization</h2>
                            <p className="text-gray-600 mt-1">Collaborate with your team</p>
                        </div>
                        <div className="text-right mt-4">
                            <a href="/dashboard/organization" className="text-black hover:text-blue-600">↗</a>
                        </div>
                    </div>

                    {/* Card 3: View Notifications */}
                    <div id="step4" className="bg-white shadow-md p-6 rounded-lg flex flex-col justify-between hover:shadow-lg transition-shadow">
                        <div>
                            <div className="text-2xl mb-4">🔔</div>
                            <h2 className="text-xl font-semibold">View Notifications</h2>
                            <p className="text-gray-600 mt-1">Never miss time-sensitive messages </p>
                        </div>
                        <div className="text-right mt-4">
                            <a href="/dashboard/notifications" className="text-black hover:text-blue-600">↗</a>
                        </div>
                    </div>

                    {/* Card 4: View models */}
                    <div id="step5" className="bg-white shadow-md p-6 rounded-lg flex flex-col justify-between hover:shadow-lg transition-shadow">
                        <div>
                            <div className="text-2xl mb-4">💭</div>
                            <h2 className="text-xl font-semibold">View Conversations</h2>
                            <p className="text-gray-600 mt-1">See your chats with customers</p>
                        </div>
                        <div className="text-right mt-4">
                            <a href="/dashboard/conversations" className="text-black hover:text-blue-600">↗</a>
                        </div>
                    </div>

                    {/* Card 5: Track your usage */}
                    <div id="step6" className="bg-white shadow-md p-6 rounded-lg flex flex-col justify-between hover:shadow-lg transition-shadow">
                        <div>
                            <div className="text-2xl mb-4">📊</div>
                            <h2 className="text-xl font-semibold">View your Analytics</h2>
                            <p className="text-gray-600 mt-1">Deep dive into your usage</p>
                        </div>
                        <div className="text-right mt-4">
                            <a href="/dashboard/analytics" className="text-black hover:text-blue-600">↗</a>
                        </div>
                    </div>

                    {/* Card 6: Follow us on Socials */}
                    <div id="step7" className="bg-white shadow-md p-6 rounded-lg flex flex-col justify-between hover:shadow-lg transition-shadow">
                        <div>
                            <div className="text-2xl mb-4">🤝</div>
                            <h2 className="text-xl font-semibold">Follow us on Socials</h2>
                            <p className="text-gray-600 mt-1">Catch our product announcements</p>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <a href="https://www.linkedin.com/company/intelli-concierge/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
                                <FaLinkedin className="text-2xl text-gray-700 hover:text-blue-600 transition-colors" />
                            </a>

                            <a href="https://www.instagram.com/intelli_concierge/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                                <FaInstagram className="text-2xl text-gray-700 hover:text-pink-500 transition-colors" />
                            </a>

                            <a href="#" className="text-black hover:text-blue-600 ml-auto">Click the icons</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
       
    );
};

export default Dashboard;