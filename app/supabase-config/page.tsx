import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SupabaseConfigPage() {
  return (
    <div className="min-h-screen bg-gradient">
      <Navigation />
      <main className="container py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Supabase Configuration Required</h1>

          <Card>
            <CardHeader>
              <CardTitle>Missing Environment Variables</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-md text-amber-800">
                <p className="font-medium mb-2">⚠️ Supabase configuration is incomplete</p>
                <p>Your application is missing the required Supabase environment variables.</p>
              </div>

              <h3 className="text-lg font-semibold">Follow these steps to configure Supabase:</h3>

              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <p className="font-medium">Create a .env.local file in your project root</p>
                  <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto mt-2">
                    <code>
                      NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
                      <br />
                      NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
                    </code>
                  </pre>
                </li>

                <li>
                  <p className="font-medium">Get your Supabase URL and Anon Key from your Supabase project</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Go to your Supabase project dashboard → Project Settings → API → Project URL and anon/public key
                  </p>
                </li>

                <li>
                  <p className="font-medium">Restart your Next.js development server</p>
                  <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto mt-2">
                    <code>npm run dev</code>
                  </pre>
                </li>

                <li>
                  <p className="font-medium">
                    If deploying to Vercel, add these environment variables in your project settings
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Vercel Dashboard → Your Project → Settings → Environment Variables
                  </p>
                </li>
              </ol>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-md text-blue-800">
                <p className="font-medium">Need help?</p>
                <p>
                  Refer to the{" "}
                  <a
                    href="https://supabase.com/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Supabase documentation
                  </a>{" "}
                  for more information on setting up environment variables.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
