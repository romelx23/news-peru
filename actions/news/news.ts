"use server";
import axios from "axios";
import * as cheerio from "cheerio";
import { load } from "cheerio";

export async function getNewsElComercio() {
  const url = "https://elcomercio.pe/";
  try {
    // Hacer la solicitud HTTP a la página de El Comercio
    const { data } = await axios.get(url);

    // Cargar el HTML usando Cheerio
    const $ = cheerio.load(data);

    // Array para almacenar las noticias
    const news: {
      title: string;
      image: string;
      date?: string;
      href: string;
    }[] = [];

    $(".fs-wi").each((_, element) => {
      const titleElement = $(element).find(".fs-wi__title a");
      const title = titleElement.text().trim();
      const href = titleElement.attr("href");
      const imageElement = $(element).find("img");

      // Verificar si existe imagen, y utilizar 'src' o 'data-src'
      const imageSrc =
        imageElement.attr("src") || imageElement.attr("data-src") || "";
      const image = imageSrc.startsWith("https")
        ? imageSrc
        : `https://elcomercio.pe${imageSrc}`;

      const dateElement = $(element)
        .find(".fs-premium-label")
        .parent()
        .siblings("time");
      const date = dateElement.attr("datetime") || "";

      if (title && image) {
        news.push({
          title,
          image,
          date,
          href: `https://elcomercio.pe${href}`,
        });
      }
    });

    return news;
  } catch (error) {
    console.error("Error al hacer scraping:", error);
    return [];
  }
}

export async function getNewsLaRepublica() {
  const url = "https://larepublica.pe";

  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
        "Accept-Language": "es-ES,es;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      },
    });
    const $ = load(data);

    // Array para almacenar las noticias
    const news: {
      title: string;
      image: string;
      date?: string;
      href: string;
    }[] = [];

    // Seleccionamos cada contenedor de noticia
    $(".ItemSection_itemSection__D8r12").each((index, element) => {
      // Obtenemos el título y el enlace
      const title = $(element)
        .find(".ItemSection_itemSection__title__PleA9 a")
        .text()
        .trim();
      const href =
        url +
        $(element)
          .find(".ItemSection_itemSection__title__PleA9 a")
          .attr("href");

      // Obtenemos la URL de la imagen
      const image = $(element).find(".comp_image").attr("src");

      // Validar que se obtuvo la información
      if (title && href && image) {
        news.push({ title, href, image });
      }
    });

    return news;
  } catch (error) {
    console.error("Error obteniendo noticias de La República:", error);
    return [];
  }
}

export async function getNewsGestion() {
  try {
    const url = "https://gestion.pe/";
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });

    const $ = cheerio.load(data);

    // Array para almacenar noticias
    const news: {
      title: string;
      image: string;
      date?: string;
      href: string;
    }[] = [];

    // Buscar el contenedor de las noticias
    $("div.fs-container.border-top-fs-container").each((_, element) => {
      const titulo = $(element).find(".fs-wi__title a").text().trim();
      const enlace = $(element).find(".fs-wi__title a").attr("href");
      const autor = $(element).find(".fs-wi__authors a").text().trim();
      // Obtiene la imagen desde el atributo `data-src`
      const imagen = $(element).find("img").attr("data-src") || "";

      const fecha = $(element).find(".fs-wi__date time").attr("datetime");

      if (titulo && enlace) {
        news.push({
          title: titulo,
          image: imagen || "",
          date: fecha,
          href: enlace,
        });
      }
    });

    console.log("Noticias encontradas:", news);
    return news;
  } catch (error) {
    console.error("Error al hacer scraping:", error);
    return [];
  }
}
