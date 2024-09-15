import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Database, HelpCircle, Calendar, Mail, Download } from "lucide-react"

export default function ConfirmationPage() {
  // In a real application, you'd generate this dynamically
  const orderId = "ORD-12345-ABCDE"
  const estimatedReleaseDate = "September 15, 2023"

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
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">Thank You for Your Pre-order!</CardTitle>
            <CardDescription className="text-xl text-gray-600 dark:text-gray-300">You've secured your spot at 50% off.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg bg-indigo-50 p-6 dark:bg-indigo-900/50">
              <h3 className="font-semibold text-xl mb-4 text-gray-800 dark:text-white">Order Summary</h3>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300 flex justify-between">
                  <span>Product:</span>
                  <span className="font-medium">Supabase Self-Hosting SaaS Application</span>
                </p>
                <p className="text-gray-600 dark:text-gray-300 flex justify-between">
                  <span>Amount Paid:</span>
                  <span className="font-medium">$75</span>
                </p>
                <p className="text-gray-600 dark:text-gray-300 flex justify-between">
                  <span>Order Number:</span>
                  <span className="font-medium">{orderId}</span>
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-gray-800 dark:text-white">What's Next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Estimated Release Date</h4>
                    <p className="text-gray-600 dark:text-gray-300">{estimatedReleaseDate}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Stay Updated</h4>
                    <p className="text-gray-600 dark:text-gray-300">Check your inbox for regular progress updates.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Download className="h-6 w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Early Access</h4>
                    <p className="text-gray-600 dark:text-gray-300">You'll get priority access before the public launch.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <HelpCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Support</h4>
                    <p className="text-gray-600 dark:text-gray-300">Dedicated support for all pre-order customers.</p>
                  </div>
                </div>
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
              <Link href="/dashboard">
                View Dashboard
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