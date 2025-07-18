"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PiggyBank, DollarSign, Calendar, Save } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SavingsProgress() {
    const [currentAmount, setCurrentAmount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const targetAmount = 120000 // Meta fix

    const startDate = "01/06/2025"
    const progress = currentAmount ? Math.min((currentAmount / targetAmount) * 100, 100) : 0
    const remainingAmount = currentAmount ? Math.max(targetAmount - currentAmount, 0) : targetAmount

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value)
    }

    useEffect(() => {
        fetch('/api/valor')
            .then(res => res.json())
            .then(data => {
                setCurrentAmount(data.valor)
                setIsLoading(false);
            })
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);
        
        return () => {
            clearTimeout(timer)
        }
    }, [isLoading]);

    const handleUpdateValue = async () => {
        const res = await fetch('/api/valor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ novoValor: currentAmount })
        })
        const data = await res.json()
        setCurrentAmount(data.valor)
    }

    if (isLoading) return <p>Carregando...</p>

    return (
        <>
            <div className="text-center p-4 w-full">
                <h1 className="text-3xl font-bold mb-2">Meta de Economia</h1>
                <p className="text-zinc-50 text-lg">{formatCurrency(targetAmount)}</p>
            </div>

            <div className="space-y-8">
                {/* Input do valor atual */}
                <div className="space-y-3">
                    <Label htmlFor="current" className="text-lg font-semibold">
                        Quanto você já guardou?
                    </Label>
                    <div className="relative">
                        <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                        <Input
                            id="current"
                            type="number"
                            value={currentAmount || ''}
                            onChange={(e) => setCurrentAmount(Number(e.target.value))}
                            className="pl-12 h-14 text-lg font-semibold border-2 focus:border-emerald-400"
                            placeholder="0"
                        />
                    </div>
                    <div className="relative">
                        <Button variant='default' className="w-full bg-emerald-600" onClick={handleUpdateValue}> <Save className='h-4 w-4' /> Salvar </Button>
                    </div>
                </div>

                {/* Barra de progresso principal - MAIS EVIDENTE */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Progresso</span>
                        <span className="text-2xl font-bold text-emerald-600">{progress.toFixed(1)}%</span>
                    </div>

                    <div className="relative bg-slate-200 rounded-full h-8 overflow-hidden shadow-inner">
                        <div
                            className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-700 ease-out shadow-lg"
                            style={{ width: `${progress}%` }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-bold text-background drop-shadow-lg">{formatCurrency(currentAmount)}</span>
                        </div>
                    </div>
                </div>

                {/* Informações principais */}
                <div className="flex flex-wrap sm:flex-nowrap gap-6">
                    <div className="text-center p-6 w-full bg-background rounded-xl shadow-md border border-slate-200">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">{formatCurrency(currentAmount)}</div>
                        <div className="font-medium">Guardado</div>
                    </div>

                    <div className="text-center p-6 w-full bg-background rounded-xl shadow-md border border-slate-200">
                        <div className="text-3xl font-bold mb-2">{formatCurrency(remainingAmount)}</div>
                        <div className="font-medium">Faltante</div>
                    </div>
                </div>

                {/* Data de início */}
                <div className="text-center p-4 bg-background rounded-lg border border-slate-200">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <Calendar className="h-5 w-5" />
                        <span className="font-medium">Iniciado em</span>
                    </div>
                    <span className="text-lg font-semibold">{startDate}</span>
                </div>

                {/* Motivação */}
                {progress >= 100 && (
                    <div className="text-center p-6 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl border-2 border-emerald-200">
                        <div className="text-4xl mb-3">🎉</div>
                        <h3 className="text-xl font-bold text-emerald-800 mb-2">Meta Alcançada!</h3>
                        <p className="text-emerald-700 font-medium">Parabéns! Você conseguiu!</p>
                    </div>
                )}
            </div>
        </>
    )
}
