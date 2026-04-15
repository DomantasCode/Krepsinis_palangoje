import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type {PortableTextBlock} from '@portabletext/react'

type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>['image']>[0]

export const sanityClient = createClient({
  projectId: '8zkwc4sx',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export type {SanityImageSource}

export interface SanityNewsItem {
  _id: string
  title: string
  tag: string
  summary: string
  fullText: PortableTextBlock[]
  image?: SanityImageSource
  gallery?: SanityImageSource[]
  isEvent?: boolean
  eventDate?: string
  publishedAt: string
}

export interface SanityPopup {
  _id: string
  isActive: boolean
  title: string
  message: string
  image?: SanityImageSource
  ctaText?: string
  ctaLink?: string
  version: number
}

export async function fetchPopup(): Promise<SanityPopup | null> {
  const query = `*[_type == "popup" && isActive == true][0]{
    _id,
    isActive,
    title,
    message,
    image,
    ctaText,
    ctaLink,
    version
  }`
  return sanityClient.fetch(query)
}

export async function fetchNews(): Promise<SanityNewsItem[]> {
  const query = `*[_type == "news" && isEvent != true] | order(publishedAt desc)[0...20]{
    _id,
    title,
    tag,
    summary,
    fullText,
    image,
    gallery,
    isEvent,
    eventDate,
    publishedAt
  }`
  return sanityClient.fetch(query)
}

export async function fetchUpcomingEvent(): Promise<SanityNewsItem | null> {
  const today = new Date().toISOString().split('T')[0]
  const query = `*[_type == "news" && isEvent == true && eventDate >= $today] | order(eventDate asc)[0]{
    _id,
    title,
    tag,
    summary,
    fullText,
    image,
    gallery,
    isEvent,
    eventDate,
    publishedAt
  }`
  return sanityClient.fetch(query, {today})
}
