export const cn = (...inputs) => inputs.filter(Boolean).join(" "); 

export const formatAmount = (amount) => {
    return new Intl.NumberFormat("es-Ve",{
        style:"currency",
        currency:"VES",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(amount);
}

export const formatDate = (date) => {
    return new Intl.DateTimeFormat("es-VE",{
        day:"2-digit",
        month:"2-digit",
        year:"numeric"
    }).format(new Date(date))
}

export const csvFormat = (transactions) => {
    const headers = ["fecha","tipo","categoria","descripción","monto"];
    const csvBody = [
        headers.join(","),
        ...transactions.map(t => [
            t.date,
            t.type === "income" ? "Ingresos" : "Gastos",
            t.category,
            `"${t.description}"`,
            t.amount
        ].join(","))
    ].join("\n")

    const blob = Blob([csvBody],{type: "text/csv;charset = utf-8"});
    const link = document.createElement("a"); 
    link.href = URL.createObjectURL(blob); 
    link.download = `Transactions ${new Date().toISOString().split("T")[0]}`
    link.click
}