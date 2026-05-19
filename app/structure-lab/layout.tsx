import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Structure Lab | House Plans to Physical 3D Models',
  description: 'Turn your floor plans and blueprints into detailed physical 3D scale models in Sri Lanka with BroocFab.',
}

export default function StructureLabLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>;
}
