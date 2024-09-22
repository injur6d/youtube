import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Cast, Menu, Mic, MoreVertical, Search, ThumbsDown, ThumbsUp, UserCircle2, Video } from 'lucide-react'

export default function YouTubeInterface() {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <Button variant="ghost" size="icon"><Menu className="h-6 w-6" /></Button>
          <img src="/placeholder.svg?height=24&width=80" alt="YouTube" className="h-6 ml-4" />
        </div>
        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative">
            <Input type="search" placeholder="Search" className="pl-4 pr-10" />
            <Button size="icon" className="absolute right-0 top-0">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon"><Mic className="h-6 w-6" /></Button>
          <Button variant="ghost" size="icon"><Cast className="h-6 w-6" /></Button>
          <Button variant="ghost" size="icon"><Bell className="h-6 w-6" /></Button>
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>YT</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Video Player and Info */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="aspect-video bg-gray-200 mb-4">
            <img src="/placeholder.svg?height=480&width=854" alt="Video Thumbnail" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-xl font-bold mb-2">iPhone 16 Pro FIRST LOOK! New Leaks & Rumors!</h1>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>AT</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold">AppleTrack</h2>
                <p className="text-sm text-gray-500">443K subscribers</p>
              </div>
              <Button variant="outline">Subscribed</Button>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="space-x-2">
                <ThumbsUp className="h-4 w-4" />
                <span>14K</span>
              </Button>
              <Button variant="outline">
                <ThumbsDown className="h-4 w-4" />
              </Button>
              <Button variant="outline">Share</Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <p className="text-sm text-gray-700 mb-4">
            Apple just seemingly confirmed some new iPhone 16 features with the announcement of iOS 18. Plus, a look at the finalized designs for the iPhone 16, iPhone 16 Plus, iPhone 16 Pro and iPhone 16 Pro Max...
          </p>
        </div>

        {/* Sidebar */}
        <div className="w-80 border-l overflow-y-auto">
          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="videos" className="flex-1">Videos</TabsTrigger>
              <TabsTrigger value="shorts" className="flex-1">Shorts</TabsTrigger>
              <TabsTrigger value="party" className="flex-1">Party</TabsTrigger>
            </TabsList>
            <TabsContent value="videos" className="p-4">
              <div className="flex items-center space-x-2 mb-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">6 members</span>
                <Button variant="ghost" size="icon">
                  <UserCircle2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-4">
                {['Ostyn', 'Sai', 'Jia', 'Andrew', 'Michael'].map((name, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{name}</p>
                      <p className="text-xs text-gray-500">That's a bit much. 60% at most</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
