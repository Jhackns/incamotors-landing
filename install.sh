#!/bin/bash

echo "🚀 Instalando dependencias de Incamotors Landing Page..."
echo ""

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js primero."
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencias instaladas correctamente"
    echo ""
    echo "🎉 ¡Listo! Para ejecutar el proyecto:"
    echo ""
    echo "   Desarrollo: npm run dev"
    echo "   Producción: npm run build"
    echo "   Vista previa: npm run preview"
    echo ""
    echo "🌐 El sitio estará disponible en: http://localhost:4321"
else
    echo "❌ Error al instalar las dependencias"
    exit 1
fi