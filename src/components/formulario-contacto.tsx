"use client";

import { useState, type FormEvent } from "react";

// Validacion del formulario de contacto.
//
// GitHub Pages es hosting estatico: no hay backend que reciba el envio. Este
// componente valida en el navegador y confirma en pantalla, a modo de demostracion.
// Para recibir los mensajes de verdad, apunta el `action` a un servicio externo
// (Formspree, Basin, Getform...) y borra el `evento.preventDefault()` de abajo.

const MENSAJES = {
  nombre: "Escribe tu nombre.",
  email: "Escribe un correo valido.",
  mensaje: "Cuentanos brevemente que quieres medir.",
  privacidad: "Necesitamos tu consentimiento para responderte.",
} as const;

type Campo = keyof typeof MENSAJES;
type Errores = Partial<Record<Campo, string>>;
type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const esEmailValido = (valor: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor);

const esCampoValidable = (nombre: string): nombre is Campo => nombre in MENSAJES;

// Los eventos del formulario llegan tipados con el <form> como destino, asi que
// el control concreto hay que reconocerlo en tiempo de ejecucion.
const comoControl = (destino: EventTarget | null): Control | null =>
  destino instanceof HTMLInputElement ||
  destino instanceof HTMLSelectElement ||
  destino instanceof HTMLTextAreaElement
    ? destino
    : null;

const esValido = (control: Control) => {
  if (control instanceof HTMLInputElement && control.type === "checkbox") return control.checked;
  if (control.name === "email") return esEmailValido(control.value.trim());
  return control.value.trim().length > 0;
};

export function FormularioContacto() {
  const [errores, setErrores] = useState<Errores>({});
  const [aviso, setAviso] = useState("");

  const revisar = (control: Control) => {
    if (!esCampoValidable(control.name)) return;

    const nombre = control.name;
    setErrores((previos) => ({
      ...previos,
      [nombre]: esValido(control) ? undefined : MENSAJES[nombre],
    }));
  };

  const alEnviar = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault(); // <- quitar si se conecta a un servicio real

    const formulario = evento.currentTarget;
    const controles = [...formulario.elements]
      .map(comoControl)
      .filter((control) => control !== null)
      .filter((control) => esCampoValidable(control.name));

    const fallidos = controles.filter((control) => !esValido(control));

    setErrores(
      Object.fromEntries(
        fallidos.map((control) => [control.name, MENSAJES[control.name as Campo]]),
      ),
    );

    if (fallidos.length > 0) {
      setAviso("");
      fallidos[0].focus();
      return;
    }

    const datos = Object.fromEntries(new FormData(formulario));
    console.info("Datos del formulario (demo, no se envian):", datos);

    setAviso(
      `Gracias, ${String(datos.nombre).split(" ")[0]}. Es una demo, asi que el mensaje no se ha enviado a ningun sitio.`,
    );
    formulario.reset();
  };

  const invalido = (campo: Campo) => (errores[campo] ? true : undefined);

  return (
    <form
      className="formulario"
      noValidate
      data-revelar
      onSubmit={alEnviar}
      // Revalidar en cuanto el usuario corrige, no antes: menos ruido mientras escribe.
      onBlur={(evento) => {
        const control = comoControl(evento.target);
        if (control) revisar(control);
      }}
      onChange={(evento) => {
        const control = comoControl(evento.target);
        if (control && esCampoValidable(control.name) && errores[control.name]) revisar(control);
      }}
    >
      <div className="campo">
        <label htmlFor="nombre">Nombre y apellidos</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          autoComplete="name"
          aria-invalid={invalido("nombre")}
        />
        <p className="campo__error">{errores.nombre}</p>
      </div>

      <div className="campo">
        <label htmlFor="email">Correo de trabajo</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={invalido("email")}
        />
        <p className="campo__error">{errores.email}</p>
      </div>

      <div className="campo">
        <label htmlFor="empresa">Empresa</label>
        <input id="empresa" name="empresa" type="text" autoComplete="organization" />
      </div>

      <div className="campo">
        <label htmlFor="equipo">Tamano del equipo</label>
        <select id="equipo" name="equipo" defaultValue="11-50">
          <option value="1-10">1 a 10 personas</option>
          <option value="11-50">11 a 50 personas</option>
          <option value="51-200">51 a 200 personas</option>
          <option value="200+">Mas de 200 personas</option>
        </select>
      </div>

      <div className="campo">
        <label htmlFor="mensaje">Que quieres medir?</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          aria-invalid={invalido("mensaje")}
        />
        <p className="campo__error">{errores.mensaje}</p>
      </div>

      <label className="casilla">
        <input type="checkbox" name="privacidad" required aria-invalid={invalido("privacidad")} />
        <span>Acepto que me contacten para responder a esta consulta.</span>
      </label>
      <p className="campo__error">{errores.privacidad}</p>

      <button className="boton boton--primario boton--bloque" type="submit">
        Enviar consulta
      </button>

      <p className="formulario__aviso" role="status">
        {aviso}
      </p>
    </form>
  );
}
