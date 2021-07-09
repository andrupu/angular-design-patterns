import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuBottomSheetComponent } from './user-menu-bottom-sheet.component';

describe('UserMenuBottomSheetComponent', () => {
    let component: UserMenuBottomSheetComponent;
    let fixture: ComponentFixture<UserMenuBottomSheetComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserMenuBottomSheetComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserMenuBottomSheetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
