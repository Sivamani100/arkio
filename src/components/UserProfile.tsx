import { useAuth } from '@/hooks/useAuth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Profile, LogoutCurve, UserSquare } from 'iconsax-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

const UserProfile = () => {
  const { user, userRole, signOut } = useAuth();
  const [profile, setProfile] = useState<{ full_name: string | null; avatar_url: string | null } | null>(null);

  useEffect(() => {
    if (user) {
      supabase
        .from('profiles')
        .select('full_name, avatar_url')
        .eq('id', user.id)
        .maybeSingle()
        .then(({ data }) => {
          setProfile(data);
        });
    }
  }, [user]);

  if (!user) return null;

  const displayName = profile?.full_name || user.email?.split('@')[0] || 'User';
  const initials = displayName.slice(0, 2).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Avatar className="h-10 w-10 cursor-pointer border-2 border-border hover:border-vibgyor-blue transition-colors">
          <AvatarImage src={profile?.avatar_url || undefined} alt={displayName} />
          <AvatarFallback className="bg-vibgyor-blue/10 text-vibgyor-blue font-bold">
            {initials}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-bold">{displayName}</p>
            <p className="text-xs text-muted-foreground truncate">{user.email}</p>
            <p className="text-xs text-vibgyor-blue font-medium capitalize">{userRole}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {userRole === 'admin' && (
          <Link to="/admin">
            <DropdownMenuItem className="cursor-pointer">
              <UserSquare size={16} className="mr-2" variant="Bold" />
              Admin Dashboard
            </DropdownMenuItem>
          </Link>
        )}
        
        {userRole === 'user' && (
          <Link to="/apply">
            <DropdownMenuItem className="cursor-pointer">
              <Profile size={16} className="mr-2" variant="Bold" />
              My Application
            </DropdownMenuItem>
          </Link>
        )}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={signOut} className="cursor-pointer text-vibgyor-red">
          <LogoutCurve size={16} className="mr-2" variant="Bold" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
