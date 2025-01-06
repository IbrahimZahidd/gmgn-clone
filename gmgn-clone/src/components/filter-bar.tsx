'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Switch } from '@/components/ui/switch'
import { Settings, Filter } from 'lucide-react'
import { TimePeriod, FilterBarProps } from '@/types/filters'

export function FilterBar({
  onTimeChange,
  onFilterTokenChange,
  onFilterRisksChange,
  onLinkedBuyChange,
  onSettingsChange,
}: FilterBarProps) {
  const [selectedTime, setSelectedTime] = useState<TimePeriod>('1m')
  const [linkedBuy, setLinkedBuy] = useState(false)

  const timePeriods: TimePeriod[] = ['1m', '5m', '1h', '6h', '24h']

  const handleTimeChange = (time: TimePeriod) => {
    setSelectedTime(time)
    onTimeChange?.(time)
  }

  const handleLinkedBuyChange = (checked: boolean) => {
    setLinkedBuy(checked)
    onLinkedBuyChange?.(checked)
  }

  return (
    <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center gap-4 h-14">
        {/* Trending and NextBC buttons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="text-primary">
            Trending
          </Button>
          <Button variant="ghost">NextBC</Button>
        </div>

        {/* Time period selector */}
        <div className="flex items-center gap-1 px-2 border rounded-md">
          {timePeriods.map((time) => (
            <Button
              key={time}
              variant={selectedTime === time ? "secondary" : "ghost"}
              size="sm"
              onClick={() => handleTimeChange(time)}
              className="text-xs"
            >
              {time}
            </Button>
          ))}
        </div>

        {/* Filter Token dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter Token
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem>Market Cap > $1M</DropdownMenuItem>
            <DropdownMenuItem>Liquidity > $10K</DropdownMenuItem>
            <DropdownMenuItem>24h Volume > $5K</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Filter Risks dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter Risks
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem>High Risk</DropdownMenuItem>
            <DropdownMenuItem>Medium Risk</DropdownMenuItem>
            <DropdownMenuItem>Low Risk</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Linked Buy toggle */}
        <div className="flex items-center gap-2">
          <Switch
            id="linked-buy"
            checked={linkedBuy}
            onCheckedChange={handleLinkedBuyChange}
          />
          <label
            htmlFor="linked-buy"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Linked Buy
          </label>
        </div>

        {/* Input field */}
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Filter..."
            className="max-w-sm"
          />
        </div>

        {/* Settings button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onSettingsChange}
          className="ml-auto"
        >
          <Settings className="h-4 w-4" />
          <span className="sr-only">Settings</span>
        </Button>
      </div>
    </div>
  )
}

