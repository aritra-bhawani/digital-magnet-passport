type PassportDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PassportDetailsPage({
  params,
}: PassportDetailsPageProps) {
  const { id } = await params;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-semibold">Passport Details</h1>

      <p className="mt-2 text-muted-foreground">
        Passport ID: {id}
      </p>
    </main>
  );
}