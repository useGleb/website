'use server'

import { cookies } from "next/headers";

export async function getUserLocale() {
  return cookies().get('NEXT_LOCALE')?.value || 'en';
}


export async function setUserLocale(locale: string) {
  cookies().set('NEXT_LOCALE', locale);
}