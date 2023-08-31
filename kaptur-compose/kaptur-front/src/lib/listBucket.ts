import supabase from "./supabase";

export default async function listBucket(name: string) {
  const list = await supabase.storage.from(name).list();
  const paths = list.data?.sort((b,a) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
  .map(d => d.name);

  if (!paths) return;

  const { data, error } = await supabase.storage.from(name).createSignedUrls(paths, 60*60);

  return data
}