'use client';

import { DefaultSeo } from 'next-seo';
import SEO from '@/lib/seo'; // sesuaikan pathnya

export default function Seo() {
  return <DefaultSeo {...SEO} />;
}
