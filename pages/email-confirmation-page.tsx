import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Database, Mail, Share2, Twitter, Facebook, Linkedin, Bell, Bookmark, Users } from "lucide-react"

export default function EmailConfirmationPage() {
  const handleShare = (platform: string) => {
    const message = encodeURIComponent("I just signed up for updates on SupaDeploy - the easiest way to self-host Supabase. Check it out!")
    const url = encodeURIComponent("https://supadeploy.com")
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${message}&url=${url}`, '_blank')
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${encodeURIComponent("SupaDeploy - Self-host Supabase with ease")}&summary=${message}`, '_blank')
        break
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <header className="px-4 lg:px-6 h-20 flex items-center border-b bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 dark:border-gray-700">
        <Link className="flex items-center justify-center" href="/">
          <Database className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">SupaDeploy</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <Card className="w-full max-w-3xl shadow-lg bg-white dark:bg-gray-800">
          <CardHeader className="text-center space-y-2">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
              <Mail className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
            </div>
            <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">Thank You for Subscribing!</CardTitle>
            <CardDescription className="text-xl text-gray-600 dark:text-gray-300">You're now on the list for exclusive updates and offers.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg bg-indigo-50 p-6 dark:bg-indigo-900/50">
              <h3 className="font-semibold text-xl mb-4 text-gray-800 dark:text-white">What to Expect</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Bell className="h-6 w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Latest Updates</h4>
                    <p className="text-gray-600 dark:text-gray-300">Be the first to know about new features and releases.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Bookmark className="h-6 w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Exclusive Content</h4>
                    <p className="text-gray-600 dark:text-gray-300">Get access to tips, tricks, and best practices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Community Insights</h4>
                    <p className="text-gray-600 dark:text-gray-300">Learn how others are using SupaDeploy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Share2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Special Offers</h4>
                    <p className="text-gray-600 dark:text-gray-300">Exclusive discounts for our subscribers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-gray-800 dark:text-white text-center">Spread the Word</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Excited about SupaDeploy? Share it with your network!</p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon" onClick={() => handleShare('twitter')} className="bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800">
                  <Twitter className="h-5 w-5 text-blue-500" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleShare('facebook')} className="bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800">
                  <Facebook className="h-5 w-5 text-blue-600" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleShare('linkedin')} className="bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800">
                  <Linkedin className="h-5 w-5 text-blue-700" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </Button>
            <Button asChild className="w-full sm:w-auto bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
              <Link href="/blog">
                Explore Our Blog
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 dark:border-gray-700">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <Database className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">SupaDeploy</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2023 SupaDeploy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}